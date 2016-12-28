class Room {
  constructor() {

  }

  getDescription() {
    return (
      "You are standing in an exceptionally gray room, with no exits and no discernable characteristics. This seems almost to be the platonic form of a room. It's hard to tell how you managed to get here in the first place" 
    )
  }

  getTitle() {
    return 'Empty Room'
  }

  action(playerAction) {
    return '' 
  }

  getActions() {
    return undefined 
  }

  exit(direction) {
    return undefined
  }

  getExits() {
    return ['home'] 
  }
}
