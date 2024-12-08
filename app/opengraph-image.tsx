import { ImageResponse } from "next/og";

export type Props = {
	title?: string;
};

export default async function OpengraphImage(
	props?: Props,
): Promise<ImageResponse> {
	const { title } = {
		...{
			title: process.env.NEXT_PUBLIC_BASE_URL,
		},
		...props,
	};

	return new ImageResponse(
		<div tw="flex h-full w-full flex-col items-center justify-center bg-black">
			<div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
				<p className="mb-1 text-2xl text-white">&#120148;</p>
			</div>
			<p tw="mt-12 text-6xl font-bold text-white">{title}</p>
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}