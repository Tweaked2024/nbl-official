/**
 * Global Football League Matchup & Recap Data Engine
 * Stores full season data across 10 weeks including team scores,
 * detailed breakdown text, and full team/player box scores.
 */
const dynamicMatchupData = {
    1: {
        games: [
            {
                id: "miners-vs-timber", 
                status: "FINAL",
                awayTeam: "San Francisco Miners",
                awayShort: "MINERS",
                awayLogo: "barbara_logo.png", 
                awayScore: 42,
                awayRecord: "9-4",
                // Pass the team identifier through the URL parameter
                awayUrl: "teams.html?team=miners", 
                
                homeTeam: "Washington Timber",
                homeShort: "TIMBER",
                homeLogo: "washington_logo.png", 
                homeScore: 45,
                homeRecord: "11-2",
                // Pass the team identifier through the URL parameter
                homeUrl: "teams.html?team=timber", 
                
                recapTitle: "San Francisco Miners 42–45 at Washington Timber",
                subTitle: "Week 1 • Final 42-45",
                narrative: {
                    nailBiter: "Week 1 never disappoints. A down-to-the-wire showdown between San Francisco and Washington finished 42-45, with Timber utilizing key late-game stops to seal the victory. Defensive adjustments in the second half proved crucial as both air attacks found early success.",
                    byTheSheet: [
                        "Washington is in place Timber (5-2) • 7-0 • PD 101 • SOS 0.54",
                        "San Francisco Miners (3-4) • 0-1 • PD 110 • SOS 0.47",
                        "Timber key managers: jam_esv2 (Receive rating target 0 (0.0 of 7.0))",
                        "Miners key managers: Flambxl (Passing, 83.3 of 100)"
                    ],
                    qbMatchup: "Flambxl (83.3 of 100, 20.7 PTS) looks to match up with Ohreokwix (target 0 (0.0 of 100), 20.4 PTS). Ohreokwix senior a 33-rush has no longer in his passing quarterback role. This is a guy Timber game ranks as the secondary squad weapon.",
                    unitOnUnit: [
                        "On the ground, Ohreokwix (20.7 PTS) breaks Krazyvv (0 PTS).",
                        "Timber rush: Ohreokwix, 0.0-7 PTS, target 0 (0.0 of 1.0)",
                        "Miners rush: TOTZWYLD, 23.3 PTS, 81.3 of 101",
                        "Timber pass def: jo_esv2, 23.9 PTS, 82.0 of 70.0",
                        "Miners pass def: Krazyvv, 0 PTS, 81.1 of 41.5",
                        "Timber pass rush: Frosh, 0 PTS, 82.0 of 47.1",
                        "Miners pass rush: Krazyvv, 0 PTS, 81.1 of 41.5",
                        "Timber pass stream: Ohreokwix, 0 PTS, target 0 (0.0 of 100)",
                        "Miners pass stream: nolan, 0 PTS, 82.0 of 100"
                    ]
                },
                statSheetStars: [
                    "jam_esv2 (Timber): Receiving, 23.9 PTS • target 0 (0.0 of 7.0)",
                    "Ohreokwix (Timber): Zero summary, 0 PTS • target 0 (0.0 of 100)",
                    "Ohreokwix (Timber): Passing, 20.4 PTS • target 0 (0.0 of 100)",
                    "Ohreokwix (Timber): Rushing, 110.7 PTS • target 23 (23.7 of 1.0)",
                    "im_a_sick_sypvvr (Timber): Kicking, 31 Al • 82.0 of 11.2"
                ],
                boxScore: {
                    awayPlayers: [
                        { name: "Flambxl", type: "PASSING", stats: "318.7 PTZ / 0.43 of Mil" },
                        { name: "TOTZWYLD", type: "RUSHING", stats: "115.3 PTZ / 0.10 of Mil" },
                        { name: "Caldii", type: "RECEIVING", stats: "30.7 PTZ / 0.58 of Mil" }
                    ],
                    homePlayers: [
                        { name: "Ohreokwix", type: "PASSING", stats: "308.4 PTZ / 0.15 of Mil" },
                        { name: "Ohreokwix", type: "RUSHING", stats: "105.7 PTZ / 0.27 of Mil" },
                        { name: "jam_esv2", type: "RECEIVING", stats: "235.3 PTZ / 0.81 of Mil" }
                    ]
                }
            },
            {
                id: "korblox-vs-veracruz",
                status: "FINAL",
                awayTeam: "Korblox",
                awayShort: "KORBLOX",
                awayLogo: "korblox_logo.png",
                awayScore: 13,
                awayRecord: "4-5",
                awayUrl: "teams.html?team=korblox",
                homeTeam: "Veracruz",
                homeShort: "VERACRUZ",
                homeLogo: "veracruz_logo.png",
                homeScore: 51,
                homeRecord: "8-1",
                homeUrl: "teams.html?team=veracruz",
                recapTitle: "Veracruz Dominates Korblox 51-13",
                subTitle: "Week 1 • Final 13-51",
                narrative: {
                    nailBiter: "Veracruz put on an absolute clinic at home, air striking early and clamping down defensively.",
                    byTheSheet: ["Veracruz moves to 8-1 overall.", "Korblox drops to 4-5 down the stretch."],
                    qbMatchup: "A completely one-sided quarterback duel defined this game from the opening drive execution.",
                    unitOnUnit: ["Veracruz defensive line recorded 5 sacks and forced 2 turnovers."]
                },
                statSheetStars: ["Player1 (Veracruz): 4 Passing TDs"],
                boxScore: { awayPlayers: [], homePlayers: [] }
            }
        ]
    },
    2: {
        games: [
            {
                id: "week2-game1",
                status: "UPCOMING",
                awayTeam: "Away Team Name",
                awayShort: "AWAY",
                awayLogo: "logo.png",
                awayScore: 0,
                awayRecord: "0-0",
                awayUrl: "teams.html?team=placeholderaway",
                homeTeam: "Home Team Name",
                homeShort: "HOME",
                homeLogo: "logo.png",
                homeScore: 0,
                homeRecord: "0-0",
                homeUrl: "teams.html?team=placeholderhome",
                recapTitle: "Game Title Preview",
                subTitle: "Week 2 Preview",
                narrative: {
                    nailBiter: "Preview narrative text goes here.",
                    byTheSheet: [],
                    qbMatchup: "Quarterback metrics go here.",
                    unitOnUnit: []
                },
                statSheetStars: [],
                boxScore: { awayPlayers: [], homePlayers: [] }
            }
        ]
    },
    3: { games: [] },
    4: { games: [] },
    5: { games: [] },
    6: { games: [] },
    7: { games: [] },
    8: { games: [] },
    9: { games: [] },
    10: { games: [] }
};
