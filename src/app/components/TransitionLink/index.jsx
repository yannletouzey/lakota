'use client'
import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions'
import { pageanimation } from "../../../pageanimation";

export default function TransitionLink({ props }) {
  const router = useTransitionRouter()
  return (
    <Link 
      href={props.href}
      onClick={(e) => {
        e.preventDefault();
        router.push(props.href, {
          onTransitionReady: pageanimation
        });
      }}
    >
      {props.text}
    </Link>
  )
}