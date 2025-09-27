'use client'
import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions'
import { pageAnimation } from "../../utils";

export default function TransitionLink({ props }) {
  const router = useTransitionRouter()
  return (
    <Link 
      href={props.href}
      onClick={(e) => {
        e.preventDefault();
        router.push(props.href, {
          onTransitionReady: pageAnimation
        });
      }}
    >
      {props.text}
    </Link>
  )
}