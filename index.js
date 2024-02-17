function scuberGreetingForFeet(distance) {
  // Write your code here!
  let offer;
  if (distance <= 400) {
    return (offer = "This one is on me!");
  } else if (distance >= 400 && distance <= 2000) {
    return (offer = "That will be twenty bucks.");
  } else if (distance > 2000 && distance < 2500) {
    return (offer = "I will gladly take your thirty bucks.");
  } else if (distance > 2500) {
    return (offer = "No can do.");
  } else {
    console.log("not within our range of service!");
  }
}

function ternaryCheckCity(cityName) {
  // Write your code here!
  return cityName === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(charm) {
  // Write your code here!

  switch (charm) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
