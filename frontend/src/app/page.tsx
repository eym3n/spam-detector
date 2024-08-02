'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';
import { Button } from '@/components/ui/button';
import { sendPostRequest } from '@/lib/api';
import { BeatLoader } from 'react-spinners';
import GithubButton from '@/components/ui/github-button';

export default function Home() {
	const [spamProbability, setSpamProbability] = useState(0);
	const [showProbability, setShowProbability] = useState(false);
	const [loading, setLoading] = useState(false);
	const [subject, setSubject] = useState('');
	const [body, setBody] = useState('');

	async function onCheck() {
		const data = await sendPostRequest(subject + '\n' + body);
		if (data['prediction_probability'] !== undefined) {
			setShowProbability(false);
			setSpamProbability(data['prediction_probability'][0]);
			setShowProbability(true);
		}
	}
	useEffect(() => {
		console.log('Spam probability:', spamProbability);
	}, [spamProbability]);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<div className='min-h-screen w-full bg-black bg-dot-white/[0.2] relative'>
				{/* Radial gradient for the container to give a faded look */}
				<div className='h-full w-full absolute pointer-events-none inset-0 justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
				<div className='h-full w-full relative z-1 flex flex-col items-center gap-10 my-16'>
					<span className='text-5xl font-bold pb-8'>
						Email <span className='text-red-500'>Spam</span> Detection 🔍
					</span>
					<span className='opacity-40 text-lg font-light'>
						Input your email and see the spam probability
					</span>
					<Input
						id='subject'
						className='w-96 bg-black bg-opacity-45'
						placeholder='Subject'
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					></Input>
					<Textarea
						id='body'
						className='w-96 h-48 bg-black bg-opacity-45'
						placeholder='Body'
						value={body}
						onChange={(e) => setBody(e.target.value)}
					></Textarea>
					{showProbability && (
						<div className=' align-middle text-xl font-bold w-[100px] h-[100px] text-white'>
							<VisibilitySensor>
								{({ isVisible }: { isVisible: boolean }) => {
									const percentage = isVisible
										? Math.round(spamProbability * 100)
										: 0;
									return (
										<CircularProgressbar
											value={percentage}
											text={`${percentage}%`}
											styles={{
												text: { fill: 'white' },
												path: {
													stroke:
														spamProbability > 0.7
															? 'red'
															: spamProbability > 0.5
															? 'orange'
															: '#3e98c7',
												},
											}}
										/>
									);
								}}
							</VisibilitySensor>
						</div>
					)}
					<Button
						className='align-bottom'
						variant='outline'
						disabled={body === '' || loading}
						onClick={async () => {
							setLoading(true);
							await onCheck();
							setLoading(false);
						}}
					>
						{!loading ? (
							'See probability'
						) : (
							<BeatLoader size={5} color='white' />
						)}
					</Button>
				</div>
			</div>
			<div className='fixed bottom-0 right-0 m-5'>
				<GithubButton></GithubButton>
			</div>
		</main>
	);
}
