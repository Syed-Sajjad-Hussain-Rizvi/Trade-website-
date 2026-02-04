import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
	{ href: "#why-free", label: "Why is it free?" },
	{ href: "#results", label: "Member results" },
	{ href: "#about", label: "Our services" },
	{ href: "#about", label: "Who is Leonard?" },
];

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
			<div className="container mx-auto">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<a href="#" className="flex items-center gap-2">
						<span className="text-xl md:text-2xl font-bold text-black">
							SIGNAL<span className="text-gradient">2</span>TRADE
						</span>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm font-medium text-black hover:text-foreground transition-colors duration-200"
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

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden p-2 text-foreground"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
						className="md:hidden bg-background border-b border-border"
					>
						<nav className="container py-4 flex flex-col gap-4">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</a>
							))}
							<Button variant="cta" size="lg" className="mt-2">
								Join the free group
							</Button>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};
