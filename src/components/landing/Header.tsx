import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
	{ href: "#why-free", label: "Why is it free?" },
	{ href: "#results", label: "Member results" },
	{ href: "#services", label: "Our services" },
	{ href: "#lenard", label: "Who is Lennard?" },
];

export const Header = () => {
		const [isMenuOpen, setIsMenuOpen] = useState(false);

		return (
			<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 md:h-20">
						{/* Logo */}
						<a href="#" className="flex items-center gap-2">
							<span className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-none">
								SIGNAL<span className="text-gradient">2</span>TRADE
							</span>
						</a>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center gap-8">
							{navLinks.map((link, idx) => (
								<a
									key={`${link.href}-${idx}`}
									href={link.href}
									className="text-sm font-medium text-black"
								>
									{link.label}
								</a>
							))}
						</nav>

						{/* Desktop CTA */}
						<div className="hidden md:block">
							<Button variant="cta" size="lg">
								Jetzt beitreten
							</Button>
						</div>

						{/* Mobile Menu Toggle (black, no hover) */}
						<button
							className="md:hidden p-2 bg-black text-white rounded active:scale-95 transition-none"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={isMenuOpen}
						>
							{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.18 }}
							className="md:hidden bg-white border-t border-border shadow-lg"
						>
							<nav className="px-4 py-6 space-y-4">
								{navLinks.map((link, idx) => (
									<a
										key={`${link.href}-mobile-${idx}`}
										href={link.href}
										className="block text-base font-medium text-black py-2"
										onClick={() => setIsMenuOpen(false)}
									>
										{link.label}
									</a>
								))}
								<div className="pt-2">
									<Button
										variant="cta"
										size="lg"
										className="w-full justify-center"
										onClick={() => setIsMenuOpen(false)}
									>
										Join the free group
									</Button>
								</div>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		);
	};

export default Header;
