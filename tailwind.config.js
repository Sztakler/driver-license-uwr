module.exports = {
	content: ["./src/client/**/*.{js,jsx,ts,tsx,html}"],
	theme: {
		fontFamily: {
			display: ["JEZUSMARIA", "sans-serif"],
			sans: ["Inter", "sans-serif"],
			altInter: ["Inter", "cursive"],
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
			maxWidth: {
				subtitle: "538px",
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
				"negative-result":
					"url(/src/assets/images/svg/Results/wynik-negatywny.svg)",
				"positive-result":
					"url(/src/assets/images/svg/Results/wynik-pozytywny.svg)",
				"negative-result-mobile":
					"url('/src/assets/images/svg/Results/wynik-negatywny-mobile.svg')",
				"positive-result-mobile":
					"url(/src/assets/images/svg/Results/wynik-pozytywny-mobile.svg)",
				"training-menu":
					"url('/src/assets/images/svg/TrainingPage/trening.svg')",
				"training-menu-mobile":
					"url(/src/assets/images/svg/TrainingPage/trening-mobile.svg)",
				register:
					"url(/src/assets/images/svg/RegisterPage/załóż-darmowe-konto.svg)",
				"exam-menu": "url(/src/assets/images/svg/ExamPage/egzamin.svg)",
				"exam-menu-mobile":
					"url(/src/assets/images/svg/ExamPage/egzamin-mobile.svg)",
				"theory-menu":
					"url(/src/assets/images/svg/TextbookPage/podręcznik.svg)",
				"theory-menu-mobile":
					"url(/src/assets/images/svg/TextbookPage/podręcznik-mobile.svg)",
				login: "url(/src/assets/images/svg/LoginPage/zaloguj-się.svg)",
				"login-mobile":
					"url(/src/assets/images/svg/LoginPage/zaloguj-się-mobile.svg)",
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
