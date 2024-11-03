module.exports = {
    MODE: "tdm",
    TEAMS: Math.random()>0.5?2:4,
    ROOM_SETUP: ['map_old_dreadnoughts'],
    MAZE: 31,
    TILE_WIDTH: 800,
    TILE_HEIGHT: 800,
    PORTAL_SPAWNS: true,
    MAX_UPGRADE_TIER: 13,
    SPAWN_CONFINEMENT: {xMin: 18000},
    OLD_RECOIL: true,
    LEVEL_CAP: 300,
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45 && level & 1 == 1) return 1;
        if (level % 3 == 1 && level < 100) return 1;
        if (level % 2 == 1 && level < 118) return 1;
        return 0;
    },
};