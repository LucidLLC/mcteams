var Direction = {
    NORTH: {
        // These are the XZ modifiers 
        // These will be multiplied to get the coords
        mods:[0,-1]
    },
    EAST: {
        mods:[1,0]
    },
    SOUTH: {
        mods:[0, 1]
    },
    WEST: {
        mods:[-1,0]
    }
}

var Tracker = {
    PlayerX: -1,
    PlayerZ: -1,
    Length:  -1,
    Nether: false,
    Direction: null,
    Calculate: function(narrowed) {
        // narrowed is where the player you are tracking last appears 
        // on the tracker. e.g. you track and they're on 50 but not at 25. You enter your coords, and 50 for narrowed.
        if (this.Direction == Direction.NORTH || this.Direction == Direction.SOUTH) {
            return (narrowed * this.Direction.mods[1])+ this.PlayerZ
        }
        return (narrowed * this.Direction.mods[0]) + this.PlayerXs
    }
};