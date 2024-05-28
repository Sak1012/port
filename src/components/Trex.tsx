"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";
const TrexGame: React.FC = () => {
  const dinoRef = useRef<HTMLDivElement>(null);
  const cactusRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  const jump = () => {
    if (dinoRef.current && !dinoRef.current.classList.contains("jump")) {
      dinoRef.current.classList.add("jump");
      setTimeout(() => {
        dinoRef.current?.classList.remove("jump");
      }, 300);
    }
  };

  useEffect(() => {
    if (!isGameStarted) return;

    const isAlive = setInterval(() => {
      if (!dinoRef.current || !cactusRef.current) return;

      const dinoTop = parseInt(
        getComputedStyle(dinoRef.current).getPropertyValue("top"),
      );
      const cactusLeft = parseInt(
        getComputedStyle(cactusRef.current).getPropertyValue("left"),
      );

      if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        setIsGameOver(true);
        setIsGameStarted(false);
        clearInterval(isAlive);
      } else {
        setScore((prevScore) => prevScore + 1);
      }
    }, 10);

    return () => clearInterval(isAlive);
  }, [isGameStarted]);

  useEffect(() => {
    if (!isGameStarted) return;

    document.addEventListener("keydown", jump);
    return () => document.removeEventListener("keydown", jump);
  }, [isGameStarted]);

  const startGame = () => {
    setIsGameOver(false);
    setScore(0);
    setIsGameStarted(true);
  };

  return (
    <div className="game-container font-mono">
      <div className="game">
        <div id="dino" ref={dinoRef}></div>
        <div id="cactus" ref={cactusRef}></div>
      </div>
      {!isGameStarted && !isGameOver && (
        <div className="start-button" onClick={startGame}>
          Start
        </div>
      )}
      {isGameOver && (
        <div className="game-over" onClick={startGame}>
          Game Over! Click to Restart
        </div>
      )}
      Score: {score}
    </div>
  );
};

export default TrexGame;
