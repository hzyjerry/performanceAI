var timeRecord = {
	0: {
		author: "system",
		summary: "Abnormal dip in CPU Usage. Recommend looking deeper into paging info.",
		start: 28,
		end: 43,
		selectedData: [
			{
				id: "CPU Usage",
				healthy: false,
			},
			{
				id: "Memory Usage",
				healthy: true,
			},
			{
				id: "Disk PG Steal",
				healthy: true,
			}
		]
	},
	1: {
		author: "system",
		summary: "the sudden 80% spike in CPU usage is abmornal. Possibly due to memory usage ",
		start: 5,
		end: 10,
		selectedData: [
			{
				id: "CPU Usage",
				healthy: false,
			},
			{
				id: "Memory Usage",
				healthy: false,
			},
			{
				id: "Disk PG Steal",
				healthy: true,
			}
		]
	},
	2: {
		author: "Wai Ip",
		summary: "Abnormal spike in Disk PG Steal.",
		start: 109,
		end: 115
		selectedData: [
			{
				id: "CPU Usage",
				healthy: false,
			},
			{
				id: "Memory Usage",
				healthy: false,
			},
			{
				id: "Disk PG Steal",
				healthy: true,
			}
		]
	},
	3: {
		author: "Wai Ip",
		summary: "Abnormal PG Steal Behavior, indicative of potential memory leak",
		start: 148,
		end: 167,
		selectedData: [
			{
				id: "CPU Usage",
				healthy: false,
			},
			{
				id: "Memory Usage",
				healthy: false,
			},
			{
				id: "Disk PG Steal",
				healthy: true,
			}
		]
	},
	4: {
		author: "Nalnaji",
		summary: "Abnormal spike in memory usage, as opposed to steady increase",
		start: 31,
		end: 42,
		selectedData: [
			{
				id: "CPU Usage",
				healthy: true,
			},
			{
				id: "Memory Usage",
				healthy: false,
			},
			{
				id: "Disk PG Steal",
				healthy: true,
			}
		]
	},
	5: {
		author: "Lucianno",
		summary: "Abnormal behavior in both CPU and PG Steal. Possible reason is Garbage collection.",
		start: 246,
		end: 251,
		selectedData: [
			{
				id: "CPU Usage",
				healthy: false,
			},
			{
				id: "Memory Usage",
				healthy: true,
			},
			{
				id: "Disk PG Steal",
				healthy: false,
			}
		]
	},
}

export default timeRecord