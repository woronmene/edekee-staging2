const headerVariant = {
	rest: {
		opacity: 1,
	},
	visible: {
		opacity: 0,
		transition: {
			duration: 3,
			delay: 2.2,
			staggerChildren: 30,
			when: "beforeChildren",
		},
	},
};

export default headerVariant;