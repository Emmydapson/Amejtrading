"use client";

import { useEffect, useState } from "react";
import { Box, Container, Button, Text, Flex,  HStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock } from "react-icons/fa";

// Function to calculate time left
const getTimeLeft = (targetDate: Date) => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

export function HeroSection() {
    const [targetDate, setTargetDate] = useState<Date | null>(null);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // ✅ Set the target date only on client-side
    useEffect(() => {
        const date = new Date();
        date.setDate(date.getDate() + 7); // 7-day countdown
        setTargetDate(date);
    }, []);

    // ✅ Start countdown only when targetDate is set
    useEffect(() => {
        if (!targetDate) return;

        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // ✅ Prevent hydration errors by rendering only after targetDate is set
    if (!targetDate) return null;

    return (
        <Box position="relative" width="100%" height="100vh" overflow="hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            >
                <source src="/liveVideo.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="blackAlpha.800" zIndex={0} />

            {/* Content Section */}
            <Flex position="relative" zIndex={1} height="100vh" align="center" justify="center" textAlign="center" px={4}>
                <Container maxW="container.lg">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <Text fontSize="lg" fontWeight="bold" color="red.500" textTransform="uppercase">
                            Join Our 2-Week Expert-Led Interactive Trading Session
                        </Text>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white" mt={3}>
                            Master Forex with Expert-Led Training
                        </Text>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
                        <Text fontSize="md" color="gray.300" mt={3}>
                            Gain hands-on experience, real-time market strategies, and risk management techniques from top industry experts.
                        </Text>
                    </motion.div>

                    {/* Key Benefits (Two Columns, Three Rows) */}
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={6} spacingY={3} mt={6}>
                            <HStack>
                                <Icon as={FaCheckCircle} color="green.400" />
                                <Text fontSize="md" color="white">🚀 Live Expert Sessions</Text>
                            </HStack>
                            <HStack>
                                <Icon as={FaCheckCircle} color="green.400" />
                                <Text fontSize="md" color="white">📊 Practical Trading Simulations</Text>
                            </HStack>
                            <HStack>
                                <Icon as={FaCheckCircle} color="green.400" />
                                <Text fontSize="md" color="white">📈 Proven Strategies for Success</Text>
                            </HStack>
                            <HStack>
                                <Icon as={FaCheckCircle} color="green.400" />
                                <Text fontSize="md" color="white">📅 Daily Market Analysis</Text>
                            </HStack>
                            <HStack>
                                <Icon as={FaCheckCircle} color="green.400" />
                                <Text fontSize="md" color="white">💰 Risk Management Techniques</Text>
                            </HStack>
                            <HStack>
                                <Icon as={FaCheckCircle} color="green.400" />
                                <Text fontSize="md" color="white">🌍 Trade with Confidence</Text>
                            </HStack>
                        </SimpleGrid>
                    </motion.div>

                    {/* Countdown Timer */}
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1.1 }}>
                        <Flex mt={6} justify="center" align="center" bg="gray.900" p={3} borderRadius="md" boxShadow="lg">
                            <Icon as={FaClock} color="yellow.400" mr={2} />
                            <Text fontSize="md" color="white">
                                Limited Slots Available –{" "}
                                <Text as="span" fontWeight="bold" color="red.500">
                                    {String(timeLeft.days).padStart(2, "0")}d{" "}
                                    {String(timeLeft.hours).padStart(2, "0")}h{" "}
                                    {String(timeLeft.minutes).padStart(2, "0")}m{" "}
                                    {String(timeLeft.seconds).padStart(2, "0")}s
                                </Text>
                            </Text>
                        </Flex>
                    </motion.div>

                    {/* Pricing & CTA */}
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1.3 }}>
                        <Text fontSize="md" color="gray.300" mt={3}>
                            🔹 <Text as="span" fontWeight="bold" color="red.400">
                                Enrollment Fee: N100,000
                            </Text>{" "}
                            (Valued at N400,000 – Limited Time Discount!)
                        </Text>

                        <Button
                            mt={6}
                            bg="red.600"
                            color="white"
                            size="lg"
                            _hover={{ bg: "black", transform: "scale(1.05)" }}
                            borderRadius="full"
                            transition="0.3s"
                            as="a"
                            href="https://wa.me/2349050463932"
                            target="_blank"
                        >
                            Join The Training Now
                        </Button>
                    </motion.div>
                </Container>
            </Flex>
        </Box>
    );
}
