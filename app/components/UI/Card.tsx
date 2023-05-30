"use client";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

type CardProps = {
  imgImg?: string;
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  titleSize?: "small" | "large";
  hrf?: string;
  isTargetBlank?: boolean;
};

const Card: FC<CardProps> = ({
  title,
  subTitle,
  children,
  imgImg,
  titleSize,
  hrf,
  isTargetBlank,
}) => {
  return (
    <Link href={hrf ? hrf : "/"} target={isTargetBlank ? "_blank" : "_self"}>
      <div className="w-full rounded-2xl bg-neutral-700/70 p-8 group cursor-pointer">
        {imgImg && (
          <div>
            <Image
              src={imgImg}
              className="rounded-full mb-12"
              alt="img"
              height={90}
              width={90}
            />
          </div>
        )}
        {subTitle && (
          <div className="mb-4">
            <span className="uppercase font-semibold text-neutral-400 tracking-tighter">
              {subTitle}
            </span>
          </div>
        )}
        {!children ? (
          <div className="flex justify-between">
            <p
              className={`font-semibold text-white
            ${titleSize === "small" ? "text-xl" : "text-3xl"}`}>
              {title}
            </p>

            <ArrowSmallRightIcon className="w-8 h-8 rounded-full font-bold border-[3px] group-hover:text-pink-600 group-hover:border-pink-700 group-hover:bg-pink-700/30" />
          </div>
        ) : (
          <p
            className={`font-semibold text-white
            ${titleSize === "small" ? "text-lg" : "text-3xl"}`}>
            {title}
          </p>
        )}
        {children && (
          <div className="mt-4 flex justify-between items-center flex-row-reverse">
            <ArrowSmallRightIcon className="w-8 h-8 rounded-full font-bold border-[3px] group-hover:text-pink-600 group-hover:border-pink-700 group-hover:bg-pink-700/30" />
            {children}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
