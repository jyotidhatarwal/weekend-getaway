import { useState } from "react";
import "./styles.css";

const ActivitiesDatabase = {
  Adventure: [
    {
      name: "Nandi Hills",
      description: "The Bracing air and serene environs of Nandi Hills",
      price: "free INR",
      rating: "4.5/5"
    },
    {
      name: "Skandagiri Trek",
      description:
        "Mountain fortress located around 70km from Banglore.This tiring yet much rewarding trek takes you through a Spectacular journey admist the wilderness.",
      price: "1000 INR",
      rating: "4/5"
    },
    {
      name: "Paragliding in Nandi Hills",
      description:
        "Fly High in the sky with scenic valley views of nandi Hills",
      price: "4000 INR",
      rating: "4.5/5"
    }
  ],
  SightSeeing: [
    {
      name: "Lal Bagh",
      description:
        "This garden has a lot of points of interest that will keep you engaged for the entire day.",
      price: "25 INR",
      rating: "4/5"
    },
    {
      name: "Ulsoor Lake",
      description:
        "Boating is a possibility here. A visit to this lake can be combined with a visit to the nearby Gurudwara (Sikh house of worship), Bangalore’s largest.",
      price: "free",
      rating: "3.5/5"
    },
    {
      name: "Cubbon Park",
      description:
        " In addition to being a natural sightseeing destination, some of the major structures of the city such as the Attara Kacheri, Cubbon Park Museum and Sheshadri Iyer Memorial Park are also situated here",
      price: "free",
      rating: "4/5"
    }
  ],
  Clubs: [
    {
      name: "Koramangala Social",
      description:
        "For a night filled with dancing, music, good food and a whole lot of cocktails, Koramangala Social is a perfect pick.",
      price: "3000 INR",
      rating: "4.5/5"
    },
    {
      name: "Indigo XP",
      description:
        "With a massive dance floor on the first floor and a rooftop with a bar and big screen, Indigo XP is one of the best places to go to for a night out. As the DJ spins the latest commercial hits from Bollywood and international chartbusters, you can't help but dance the night away. They are also a performance venue that hosts live gigs of local artists.",
      price: "2500 INR",
      rating: "4/5"
    },
    {
      name: "The Bling",
      description:
        "prime destinations for people looking out for classy and quiet places",
      price: "45000",
      rating: "4/5"
    }
  ]
};

export default function App() {
  var [genere, setgenere] = useState("Adventure");
  var activitiesList = Object.keys(ActivitiesDatabase);

  function selectGenere(userSelection) {
    setgenere(userSelection);
  }

  return (
    <div className="App">
      <h1>Weekend Getaways in Bangalore</h1>
      <small>
        Please Checkout our Recommendation Below, by selecting the Genere of
        your preference
      </small>
      <div>
        {activitiesList.map((genere) => (
          <button key={genere} onClick={() => selectGenere(genere)}>
            {genere}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {ActivitiesDatabase[genere].map((list) => (
            <li key={list.name}>
              <div>
                <strong>Name:</strong> {list.name}
              </div>
              <div>
                <strong>Description:</strong> {list.description}
              </div>
              <div>
                <strong>Price:</strong> {list.price}
              </div>
              <div>
                <strong>Ratings:</strong> {list.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
