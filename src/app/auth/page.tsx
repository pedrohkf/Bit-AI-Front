"use client";

import React, { useState } from "react";
import LoginForm from "../Components/login/login-form";
import RegisterForm from "../Components/Register/register-form";
import styles from "./Auth.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <div className={styles.container}>
            <div className={styles.backgroundContent}></div>

            <div className={styles.content}>
                {/* Forms */}
                <AnimatePresence mode="wait">
                    {mode === "login" ? (
                        <motion.div
                            key="login"
                            className={styles.forms}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8 }}
                        >
                            <LoginForm onSwitch={() => setMode("register")} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="register"
                            className={styles.forms}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.8 }}
                        >
                            <RegisterForm onSwitch={() => setMode("login")} />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={mode === "login" ? "bg-login" : "bg-register"}
                        className={styles.backgroundImg}
                        initial={{ opacity: 0, x: mode === "login" ? -100 : 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: mode === "login" ? 100 : -100 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.rights}>
                            <p>Direitos reservados a Bit-ai, criadora do projeto</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
