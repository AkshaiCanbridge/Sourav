"use client"

import styles from '../components/styles.module.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './anim/anim';
import Button from "../components/Button/Button";
export default function Description() {

    const phrase = "Step in to my Digital World Have a look at what I've been building";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map((word, index) => {
                        return <span className={styles.mask} key={`word-${index}`}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}></motion.p>
                {/* <div data-scroll data-scroll-speed={0.1}>
                    <Button className={styles.button}>
                        <p>About us</p>
                    </Button>
                </div> */}
            </div>
        </div>
    )
}