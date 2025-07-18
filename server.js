const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// Optional: handle root ping so Render knows the service is alive
app.get('/', (req, res) => {
  res.send("WebSocket server is running!");
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });



const fulltext = `THE BOY'S NAME WAS SANTIAGO. DUSK was falling as the boy arrived with his herd at an abandoned church. The roof had fallen in long ago, and an enormous sycamore had grown on the spot where the sacristy had once stood.
He decided to spend the night there. He saw to it that all the sheep entered through the ruined gate, and then laid some planks across it to prevent the flock from wandering away during the night. There were no wolves in the region, but once an animal had strayed during the night, and the boy had had to spend the entire next day searching for it.
He swept the floor with his jacket and lay down, using the book he had just finished reading as a pillow. He told himself that he would have to start reading thicker books: they lasted longer, and made more comfortable pillows.
It was still dark when he awoke, and, looking up, he could see the stars through the half-destroyed roof.
I wanted to sleep a little longer, he thought. He had had the same dream that night as a week ago, and once again he had awakened before it ended.
He arose and, taking up his crook, began to awaken the sheep that still slept. He had noticed that, as soon as he awoke, most of his animals also began to stir. It was as if some mysterious energy bound his life to that of the sheep, with whom he had spent the past two years, leading them through the countryside in search of food and water. "They are so used to me that they know my schedule," he muttered. Thinking about that for a moment, he realized that it could be the other way around: that it was he who had become accustomed to their schedule.

But there were certain of them who took a bit longer to awaken. The boy prodded them, one by one, with his crook, calling each by name. He had always believed that the sheep were able to understand what he said. So there were times when he read them parts of his books that had made an impression on him, or when he would tell them of the loneliness or the happiness of a shepherd in the fields. Sometimes he would comment to them on the things he had seen in the villages they passed.
But for the past few days he had spoken to them about only one thing: the girl, the daughter of a merchant who lived in the village they would reach in about four days. He had been to the village only once, the year before. The merchant was the proprietor of a dry goods shop, and he always demanded that the sheep be sheared in his presence, so that he would not be cheated. A friend had told the boy about the shop, and he had taken his sheep there.


"I need to sell some wool," the boy told the merchant.
The shop was busy, and the man asked the shepherd to wait until the afternoon. So the boy sat on the steps of the shop and took a book from his bag.
"I didn't know shepherds knew how to read," said a girl's voice behind him.
The girl was typical of the region of Andalusia, with flowing black hair, and eyes that vaguely recalled the Moorish conquerors.


"Well, usually I learn more from my sheep than from books," he answered. During the two hours that they talked, she told him she was the merchant's daughter, and spoke of life in the village, where each day was like all the others. The shepherd told her of the Andalusian countryside, and related the news from the other towns where he had stopped. It was a pleasant change from talking to his sheep.
"How did you learn to read?" the girl asked at one point. "Like everybody learns," he said. "In school."
"Well, if you know how to read, why are you just a shepherd?"
The boy mumbled an answer that allowed him to avoid responding to her question. He was sure the girl would never understand. He went on telling stories about his travels, and her bright, Moorish eyes went wide with fear and surprise. As the time passed, the boy found himself wishing that the day would never end, that her father would stay busy and keep him waiting for three days. He recognized that he was feeling something he had never experienced before: the desire to live in one place forever. With the girl with the raven hair, his days would never be the same again.
But finally the merchant appeared, and asked the boy to shear four sheep. He paid for the wool and asked the shepherd to come back the following year.


And now it was only four days before he would be back in that same village. He was excited, and at the same time uneasy: maybe the girl had already for gotten him. Lots of shepherds passed through, selling their wool.
"It doesn't matter," he said to his sheep. "I know other girls in other places."
But in his heart he knew that it did matter. And he knew that shepherds, like seamen and like traveling salesmen, always found a town where there was someone who could make them forget the joys of care free wandering.
The day was dawning, and the shepherd urged his sheep in the direction of the sun.They never have to make any decisions, he

thought. May be that's why they always stay close to me.
The only things that concerned the sheep were food and water. As long as the boy knew how to find the best pastures in Andalusia, they would be his friends. Yes, their days were all the same, with the seemingly endless hours between sunrise and dusk; and they had never read a book in their young lives, and didn't understand when the boy told them about the sights of the cities. They were content with just food and water, and, in exchange, they generously gave of their wool, their company, and once in a while their meat.
If I became a monster today, and decided to kill them, one by one, they would become aware only after most of the flock had been slaughtered, thought the boy. They trust me, and they've forgotten how to rely on their own instincts, because I lead them to nourishment.
The boy was surprised at his thoughts. May be the church, with the sycamore growing from within, had been haunted. It had caused him to have the same dream for a second time, and it was causing him to feel anger toward his faithful companions. He drank a bit from the wine that remained from his dinner of the night before, and he gathered his jacket closer to his body. He knew that a few hours from now, with the sun at its zenith, the heat would be so great that he would not be able to lead his flock across the fields. It was the time of day when all of Spain slept during the summer. The heat lasted until nightfall, and all that time he had to carry his jacket. But when he thought to complain about the burden of its weight, he remembered that, because he had the jacket, he had withstood the cold of the dawn.
We have to be prepared for change, he thought, and he was grateful for the jacket's weight and warmth.
The jacket had a purpose, and so did the boy. His purpose in life was to travel, and, after two years of walking the Andalusian terrain, he knew all the cities of the region. He was planning, on this visit, to explain to the girl how it was that a simple shepherd knew how to read. That he had attended a seminary until he was sixteen. His parents had wanted him to become a priest, and thereby a source of pride for a simple farm family. They worked hard just to have food and water, like the sheep. He had studied Latin, Spanish, and

theology. But ever since he had been a child, he had wanted to know the world, and this was much more important to him than knowing God and learning about man's sins. One afternoon, on a visit to his family, he had summoned up the courage to tell his father that he didn't want to become a priest. That he wanted to travel.


"People from all over the world have passed through this village, son," said his father. "They come in search of new things, but when they leave they are basically the same people they were when they arrived. They climb the mountain to see the castle, and they wind up thinking that the past was better than what we have now. They have blond hair, or dark skin, but basically they're the same as the people who live right here."
"But I'd like to see the castles in the towns where they live," the boy explained.
"Those people, when they see our land, say that they would like to live here forever," his father continued.
"Well, I'd like to see their land, and see how they live," said his son.
"Thepeoplewhocomeherehavealotofmoneytospend,sothey can afford to travel," his father said. "Amongst us, the only ones who travel are the shepherds."
"Well, then I'll be a shepherd!"
His father said no more. The next day, he gave his son a pouch that held three ancient Spanish gold coins.
"I found these one day in the fields. I wanted them to be a part of your inheritance. But use them to buy your flock. Take to the fields, and someday you'll learn that our countryside is the best, and our women are the most beautiful."



And he gave the boy his blessing. The boy could see in his father's gaze a desire to be able, himself, to travel the world a desire that was still alive, despite his father's having had to bury it, over dozens of years, under the burden of struggling for water to drink, food to eat, and the same place to sleep every night of his life.


The horizon was tinged with red, and suddenly the sun appeared. The boy thought back to that conversation with his father, and felt happy; he had already seen many castles and met many women. He owned a jacket, a book that he could trade for another, and a flock of sheep. But, most important, he was able every day to live out his dream.If he were to tire of the Andalusian fields, he could sell his sheep and go to sea. By the time he had had enough of the sea, he would already have known other cities, other women, and other chances to be happy. I couldn't have found God in the seminary, he thought, as he looked at the sunrise.
Whenever he could, he sought out a new road to travel. He had never been to that ruined church before, in spite of having traveled through those parts many times. The world was huge and inexhaustible; he had only to allow his sheep to set the route for a while, and he would discover other interesting things. The problem is that they don't even realize that they're walking a new road every day. They don't see that the fields are new and the seasons change. All they think about is food and water.
Maybe we're all that way, the boy mused. Even me, I haven't thought of other women since I met the merchant's daughter. Looking at the sun, he calculated that he would reach Tarifa before

midday. There, he could exchange his book for a thicker one, fill his wine bottle, shave, and have a haircut; he had to prepare himself for his meeting with the girl, and he didn't want to think about the possibility that some other shepherd, with a larger flock of sheep, had arrived there before him and asked for her hand.
It's the possibility of having a dream come true that makes life interesting, he thought, as he looked again at the position of the sun, and hurried his pace. He had suddenly remembered that, in Tarifa, there was an old woman who interpreted dreams.


The old woman led the boy to a room at the back of her house; it was separated from her living room by a curtain of colored beads. The room's furnishings consisted of a table, an image of the Sacred Heart of Jesus, and two chairs.
The woman sat down, and told him to be seated as well. Then she took both of his hands in hers, and began quietly to pray.
It sounded like a Gypsy prayer. The boy had already had experience on the road with Gypsies; they also traveled, but theyhad no flocks of sheep. People said that Gypsies spent their lives tricking others. It was also said that they had a pact with the devil, and that they kidnapped children and, taking them away to their mysterious camps, made them their slaves. As a child, the boy had always been frightened to death that he would be captured by Gypsies, and this childhood fear returned when the old woman took his hands in hers.
But she has the Sacred Heart of Jesus there, he thought, trying to reassure himself. He didn't want his hand to begin trembling, showing the old woman that he was fearful. He recited an Our Father silently.
"Very interesting," said the woman, never taking her eyes from the boy's hands, and then she fell silent.
The boy was becoming nervous. His hands began to tremble, and the woman sensed it. He quickly pulled his hands away.
"I didn't come here to have you read my palm," he said, already regretting having come.He thought for a moment that it would be

better to pay her fee and leave without learning a thing, that he was giving too much importance to his recurrent dream.
"You came so that you could learn about your dreams," said the old woman. "And dreams are the language of God. When he speaks in our language, I can interpret what he has said. But if he speaks in the language of the soul, it is only you who can understand. But, whichever it is, I'm going to charge you for the consultation."
Another trick, the boy thought. But he decided to take a chance. A shepherd always takes his chances with wolves and with drought, and that's what makes a shepherd's life exciting.
"I have had the same dream twice," he said. "I dreamed that I was in a field with my sheep, when a child appeared and began to play with the animals. I don't like people to do that, because the sheep are afraid of strangers. But children always seem to be able to play with them without frightening them. I don't know why. I don't know how animals know the age of human beings."
"Tell me more about your dream," said the woman. "I have to get back to my cooking, and, since you don't have much money, I can't give you a lot of time."
"The child went on playing with my sheep for quite a while," continued the boy, a bit upset. "And suddenly, the child took me by both hands and transported me to the Egyptian pyramids."


He paused for a moment to see if the woman knew what the Egyptian pyramids were. But she said nothing.
"Then, at the Egyptian pyramids," he said the last three words slowly, so that the old woman would understand "the child said to me, 'If you come here, you will find a hidden treasure.' And, just as she was about to show me the exact location, I woke up. Bothtimes."
The woman was silent for some time. Then she again took his hands and studied them carefully.

"I'm not going to charge you anything now," she said. "But I want one-tenth of the treasure, if you find it."
The boy laughed-out of happiness. He was going to be able to save the little money he had because of a dream about hidden treasure!
"Well, interpret the dream," he said.
"First, swear to me. Swear that you will give me one-tenth of your treasure in exchange for what I am going to tell you."
The shepherd swore that he would. The old woman asked him to swear again while looking at the image of the Sacred Heart of Jesus. "It's a dream in the language of the world," she said. "I can interpret it, but the interpretation is very difficult. That's why I feel that
I deserve a part of what you find.
"And this is my interpretation: you must go to the Pyramids in Egypt. I have never heard of them, but, if it was a child who showed them to you, they exist. There you will find a treasure that will make you a rich man."
The boy was surprised, and then irritated. He didn't need to seek out the old woman for this! But then he remembered that he wasn't going to have to pay anything.
"I didn't need to waste my time just for this," he said.
"I told you that your dream was a difficult one. It's the simple things in life that are the most extraordinary; only wise men are able to understand them. And since I am not wise, I have had to learn other arts, such as the reading of palms."
"Well, how am I going to get to Egypt?"
"I only interpret dreams. I don't know how to turn them into reality.
That's why I have to live off what my daughters provide me with." "And what if I never get to Egypt?"
"Then I don't get paid. It wouldn't be the first time."
And the woman told the boy to leave, saying she had already wasted too much time with him.
So the boy was disappointed; he decided that he would never again believe in dreams. He remembered that he had a number of things he had to take care of: he went to the market for something to eat, he traded his book for one that was thicker, and he found a bench in the plaza where he could sample the new wine he had

bought. The day was hot, and the wine was refreshing. The sheep were at the gates of the city, in a stable that belonged to a friend. The boy knew a lot of people in the city. That was what made traveling appeal to him he always made new friends, and he didn't need to spend all of his time with them. When someone sees the same people every day, as had happened with him at the seminary, they wind up becoming a part of that person's life. And then they want the person to change. If someone isn't what others want them to be, the others become angry. Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own.
He decided to wait until the sun had sunk a bit lower in the sky before following his flock back through the fields. Three days from now, he would be with the merchant's daughter.
He started to read the book he had bought. On the very first page it described a burial ceremony. And the names of the peopleinvolved were very difficult to pronounce. If he ever wrote a book, he thought, he would present one person at a time, so that the reader wouldn't have to worry about memorizing a lot of names.
When he was finally able to concentrate on what he was reading, he liked the book better; the burial was on a snowy day, and he welcomed the feeling of being cold. As he read on, an old man sat down at his side and tried to strike up a conversation.
"What are they doing?" the old man asked, pointing at the people in the plaza.
"Working," the boy answered dryly, making it look as if he wanted to concentrate on his reading.
Actually, he was thinking about shearing his sheep in front of the merchant's daughter, so that she could see that he was someone who was capable of doing difficult things. He had already imagined the scene many times; every time, the girl became fascinated when he explained that the sheep had to be sheared from back to front. He also tried to remember some good stories to relate as he sheared the sheep. Most of them he had read in books, but he would tell them as if they were from his personal experience. She would never know the difference, because she didn't know how to read.

Meanwhile, the old man persisted in his attempt to strike up a conversation. He said that he was tired and thirsty, and asked if he might have as of the boy's wine. The boy offered his bottle, hoping that the old man would leave him alone.


But the old man wanted to talk, and he asked the boy what book he was reading. The boy was tempted to be rude, and move to another bench, but his father had taught him to be respectful of the elderly. So he held out the book to the man—for two reasons: first, that he, himself, wasn't sure how to pronounce the title; and second, that if the old man didn't know how to read, he would probably feel ashamed and decide of his own accord to change benches.
"Hmm . . ." said the old man, looking at all sides of the book, as ifit were some strange object. "This is an important book, but it's really irritating."
The boy was shocked. The old man knew how to read, and had already read the book. And if the book was irritating, as the old man had said, the boy still had time to change it for another.
"It's a book that says the same thing almost all the other books in the world say,” continued the old man. "It describes people's inability to choose their own Personal Legends. And it ends up saying that everyone believes the world's greatest lie."
"What's the world's greatest lie?" the boy asked, completely surprised.
"It's this: that at a certain point in our lives, we lose control of what's happening to us, and our lives become controlled by fate. That's the world's greatest lie."
"That's never happened to me," the boy said. "They wanted me to be a priest, but I decided to become a shepherd."
"Much better," said the old man. "Because you really like to travel."

"He knew what I was thinking," the boy said to himself.`;

const words = fulltext.split(/\s+/);
const num = words.length - 50;


const rooms = new Map();
let waitingQueue = [];

function createRoom(player1, player2) {
  const roomId = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  rooms.set(roomId, { player1, player2 });

  player1.roomId = roomId;
  player2.roomId = roomId;
  player1.opponent = player2;
  player2.opponent = player1;
  const random = Math.floor(Math.random() * num);
  const match_text = words.slice(random,random+50).join(" ");
  [player1, player2].forEach(player => {
    player.send(JSON.stringify({ type: "status",text:match_text}));
    player.on('message', msg => {
        const parsed = JSON.parse(msg);
        if (player.opponent && player.opponent.readyState === WebSocket.OPEN) {
          player.opponent.send(JSON.stringify(parsed));
        }
    });

    player.on('close', () => {
      if (player.opponent && player.opponent.readyState === WebSocket.OPEN) {
        player.opponent.send(JSON.stringify({ type: "opponent_quit" }));
      }
      rooms.delete(player.roomId);
    });
  });
}

wss.on('connection', (user) => {
  waitingQueue.push(user);
  if (waitingQueue.length >= 2) {
    const player1 = waitingQueue.shift();
    const player2 = waitingQueue.shift();
    createRoom(player1, player2);
  }

  user.on('close', () => {
    waitingQueue = waitingQueue.filter(p => p !== user);
  });
});


// Render sets PORT - via env variable
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});




