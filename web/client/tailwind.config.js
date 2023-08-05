module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			display: ["Barriecito", "cursive"],
			sans: ["Inter", "sans-serif"],
			rampart: ["Rampart One", "cursive"],
		},
		extend: {
			borderRadius: {
				half: "50%",
			},
			width: {
				double: "200%",
				half: "50%",
				108: "27rem",
				116: "29rem",
				124: "31rem",
				132: "33rem",
				140: "35rem",
				148: "37rem",
			},
			height: {
				double: "200%",
				half: "50%",
				108: "27rem",
				116: "29rem",
				124: "31rem",
				132: "33rem",
				140: "35rem",
				148: "37rem",
			},
			keyframes: {
				rotation: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				appear: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				disappear: {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
			},
			animation: {
				"rotate-slow": "rotation 5s linear infinite",
				"appear-slow": "appear 1.5s cubic-bezier(0.4, 0, 0.2, 1) 1",
				"disappear-slow": "disappear 1.5s linear 1",
			},
			backgroundImage: {
				"gradient-0": "linear-gradient(0deg, var(--tw-gradient-stops))",
				"road-texture": "url(../../src/assets/images/road.jpg)",
				"positive-result": "url(/src/assets/images/resultPositive.svg)",
				"negative-result": "url(/src/assets/images/resultNegative.svg)",
				"training-menu":
					"url(/src/assets/images/svg/TrainingPage/graphic1.svg)",
				"exam-menu": "url(/src/assets/images/svg/ExamPage/graphic1.svg)",
				login: "url(/src/assets/images/svg/LoginPage/background.svg)",
			},
			typography: {
				"@variants responsive": {
					".text-max": {
						"font-size": "max(var(--text-a), var(--text-b))",
					},
				},
			},
			fontSize: {
				"max-vhvw": "max(2.6vw, 7vh)", // Customize the values as per your needs
			},
		},
	},
	plugins: [],
};
