import Image from 'next/image';
import React from 'react';
import githubIcon from '../../../public/github-icon.svg';
import Link from 'next/link';

function GithubButton() {
	return (
		<div className='h-fit w-fit hover:opacity-75 opacity-30 cursor-pointer transition-opacity duration-500'>
			<Link
				href={'https://github.com/eym3n'}
				rel='noopener noreferrer'
				target='_blank'
			>
				<Image width={40} height={40} src={githubIcon} alt={'Github'} />
			</Link>
		</div>
	);
}

export default GithubButton;
