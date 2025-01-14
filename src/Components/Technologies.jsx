import { AiOutlineDotNet } from "react-icons/ai";
import { DiMsqlServer } from "react-icons/di";
import { PiFileCSharp } from "react-icons/pi";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [-10, 10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});
const Technologies = () => {
	return (
		<>
			<div className="border-b border-neutral-800 pb-24">
				<motion.h2
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 100 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="my-20 text-center text-4xl"
				>
					Technologies
				</motion.h2>
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 100 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="flex flex-wrap items-center justify-center gap-4"
				>
					<motion.div
						variants={iconVariants(3.5)}
						initial="initial"
						animate="animate"
						className="rounded-2xl bg-neutral-800 border-4 p-4"
					>
						<RiReactjsLine className="text-7xl text-cyan-400" />
					</motion.div>
					<motion.div
						variants={iconVariants(3)}
						initial="initial"
						animate="animate"
						className="rounded-2xl bg-neutral-800 border-4 p-4"
					>
						<TbBrandNextjs className="text-7xl " />
					</motion.div>
					<motion.div
						variants={iconVariants(2.5)}
						initial="initial"
						animate="animate"
						className="rounded-2xl bg-neutral-800 border-4 p-4"
					>
						<PiFileCSharp className="text-7xl text-violet-800" />
					</motion.div>
					<motion.div
						variants={iconVariants(2)}
						initial="initial"
						animate="animate"
						className="rounded-2xl bg-neutral-800 border-4 p-4"
					>
						<AiOutlineDotNet className="text-7xl text-white" />
					</motion.div>
					<motion.div
						variants={iconVariants(1.5)}
						initial="initial"
						animate="animate"
						className="rounded-2xl bg-neutral-800 border-4 p-4"
					>
						<DiMsqlServer className="text-7xl text-red-600" />
					</motion.div>
					<motion.div
						variants={iconVariants(1)}
						initial="initial"
						animate="animate"
						className="rounded-2xl bg-neutral-800 border-4 p-4"
					>
						<SiMongodb className="text-7xl text-green-500" />
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Technologies;
