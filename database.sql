-- CREATE DATABASE "saga_movies_weekend"

CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "poster"  VARCHAR(120) NOT NULL,
  "description" TEXT NOT NULL
);


CREATE TABLE "genres" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL
);


-- JUNCTION TABLE
CREATE TABLE "movies_genres" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" INT REFERENCES "movies" NOT NULL,
  "genre_id" INT REFERENCES "genres" NOT NULL
);

--------[ DATA! ]---------

-- starter movies
INSERT INTO "movies" ("title", "poster", "description")
VALUES 
('Some Kind of Heaven', 'images/Some-Kind-of-Heaven.jpeg', 'Behind the gates of a palm-tree-lined fantasyland, three residents and one interloper at America’s largest retirement community strive to find happiness.'),
('Three Identical Strangers', 'images/Three-Identical-Strangers.jpeg', 'New York, 1980. Three complete strangers accidentally discover that they’re identical triplets, separated at birth. The 19-year-olds’ joyous reunion catapults them to international fame, but also unlocks an extraordinary and disturbing secret that goes beyond their own lives – and could transform our understanding of human nature forever.'),
('Dig!', 'images/Dig!.jpeg', 'A documentary on the once promising American rock bands The Brian Jonestown Massacre and The Dandy Warhols. The friendship between respective founders, Anton Newcombe and Courtney Taylor, escalated into bitter rivalry as the Dandy Warhols garnered major international success while the Brian Jonestown Massacre imploded in a haze of drugs.'),
('Koyaanisqatsi', 'images/Koyaanisqatsi.jpeg', 'Takes us to locations all around the US and shows us the heavy toll that modern technology is having on humans and the earth. The visual tone poem contains neither dialogue nor a vocalized narration: its tone is set by the juxtaposition of images and the exceptional music by Philip Glass.'),
('Man On Wire', 'images/Man-On-Wire.jpeg', 'On August 7th 1974, French tightrope walker Philippe Petit stepped out on a high wire, illegally rigged between New York’s World Trade Center twin towers, then the world’s tallest buildings. After nearly an hour of performing on the wire, 1,350 feet above the sidewalks of Manhattan, he was arrested. This fun and spellbinding documentary chronicles Philippe Petit’s “highest” achievement.'),
('The King of Kong: A Fistful of Quarters', 'images/The-King-of-Kong.jpg', 'In this hilarious arcade showdown, a humble novice goes head-to-head against the reigning Donkey Kong champ in a confrontation that rocks the gaming world to its processors! For over 20 years, Billy Mitchell has owned the throne of the Donkey Kong world. No one could beat his top score until now. Newcomer Steve Wiebe claims to have beaten the unbeatable, but Mitchell isn’t ready to relinquish his crown without a fight. Go behind the barrels as the two battle it out in a vicious war to earn the title of the true King of Kong.'),
('Fantastic Fungi', 'images/Fantastic-Fungi.jpeg', 'A vivid journey into the mysterious subterranean world of mycelium and its fruit— the mushroom. A story that begins 3.5 billion years ago, fungi makes the soil that supports life, connecting vast systems of roots from plants and trees all over the planet, like an underground Internet. Through the eyes of renowned mycologist Paul Stamets, professor of forest ecology Suzanne Simard, best selling author Michael Pollan, food naturalist Eugenia Bone and others, we experience the power, beauty and complexity of the fungi kingdom.
'),
('The Imposter', 'images/The-Imposter.jpeg', 'In 1994 a 13-year-old boy disappeared without a trace from his home in San Antonio, Texas. Three and a half years later he is found alive thousands of miles away in a village in southern Spain with a horrifying story of kidnap and torture. His family is overjoyed to bring him home. But all is not quite as it seems.'),
('Cropsey', 'images/Cropsey.jpeg', 'Realizing the urban legend of their youth has actually come true, two filmmakers delve into the mystery surrounding five missing children and the real-life boogeyman linked to their disappearances.'),
('Feels Good Man', 'images/Feels-Good-Man.jpeg', 'When indie comic character Pepe the Frog becomes an unwitting icon of hate, his creator, artist Matt Furie, fights to bring Pepe back from the darkness and navigate America’s cultural divide.'),
('The Century of the Self', 'images/The-Century-of-the-Self.jpg', 'The legacy of famed psychoanalyst Sigmund Freud informs the lives of people throughout the world even to this day, though it’s a phenomenon to which most are unaware. The film is an exhaustive examination of his theories on human desire, and how they’re applied to platforms such as advertising, consumerism and politics.'),
('Stop Making Sense', 'images/Stop-Making-Sense.jpeg', 'A concert film documenting Talking Heads at the height of their popularity, on tour for their 1983 album “Speaking in Tongues.” The band takes the stage one by one and is joined by a cadre of guest musicians for a career-spanning and cinematic performance that features creative choreography and visuals.'),
('Summer of Soul', 'images/Summer-of-Soul.jpeg', 'During the same summer as Woodstock, over 300,000 people attended the Harlem Cultural Festival, celebrating African American music and culture, and promoting Black pride and unity. The footage from the festival sat in a basement, unseen for over 50 years, keeping this incredible event in America’s history lost—until now.'),
('Icarus', 'images/Icarus.jpeg', 'While investigating the furtive world of illegal doping in sports, director Bryan Fogel connects with renegade Russian scientist Dr. Grigory Rodchenkov—a pillar of his country’s “anti-doping” program. Over dozens of Skype calls, urine samples, and badly administered hormone injections, Fogel and Rodchenkov grow closer despite shocking allegations that place Rodchenkov at the center of Russia’s state-sponsored Olympic doping program.'),
('American Movie', 'images/American-Movie.jpeg', 'The story of filmmaker Mark Borchardt, his mission, and his dream. Spanning over two years of intense struggle with his film, his family, financial decline, and spiritual crisis, American Movie is a portrayal of ambition, obsession, excess, and one man’s quest for the American Dream.');

-- starter genres
INSERT INTO "genres" ("name")
VALUES 
('Art & Artists'),
('Biography'),
('Crime'),
('Environment'),
('Human Interest'),
('Music'),
('Mystery'),
('Nature'),
('News & Politics'),
('Philosophy'),
('Psychology'),
('Society'),
('Sports & Video Games');


-- starter movies and genres data
INSERT INTO "movies_genres" ("movie_id", "genre_id")
VALUES 
(1,5), (1,12),
(2,5),
(3,6),
(4,4), (4,12),
(5,1), (5,3),
(6,13),
(7,8),
(8,3), (8,7),
(9,3), (9,7),
(10,1), (10,9),
(11,10), (11,11),
(12,6),
(13,9), (13,13),
(14,1), (14,2),
(15,1), (15,2);