# Instructions
## 1. Create a database that stores the following information:
- Songs, containing the following data: the title of the song, the name of the artist(s), and the album**
- Artists, containing the following data: name, date of birth, genre(s)
- Popular Songs, containing the following data: the title of the song, how many times it’s played, period of time

## 2. Populate the database you’ve created above with at least 10 data for each collection

# Steps
## How to run with Mongoose
> Note: I'v already created a database called `music_database` in MongoDB. Just run the server and it will automatically connect to the database.
1. Run `npm install` to install all dependencies first.
2. Run `npm start` to start the server.

## How to run with Mongo shell
1. Open Mongo shell by running `mongosh` in the terminal
2. Create a new database called `music_database` by running: 
   ```
   use music_database
   ```
3. Create a new collection called `songs`, `artists`, `popular_songs` by running:
   ```
   db.createCollection("songs")
   db.createCollection("artists")
   db.createCollection("popular_songs")
   ```
4. Populate collection `songs` by running this query:
   ```
   const songs = [
      {
        title: 'Under Preasure',
        artists: ['Queen', 'David Bowie'],
        album: 'Hot Space',
      },
      {
        title: 'Hotel California',
        artists: ['Eagles'],
        album: 'Hotel California',
      },
      {
        title: 'Imagine',
        artists: ['John Lennon'],
        album: 'Imagine',
      },
      {
        title: 'Thriller',
        artists: ['Michael Jackson'],
        album: 'Thriller',
      },
      {
        title: 'Hey Jude',
        artists: ['The Beatles'],
        album: 'The Beatles (The White Album)',
      },
      {
        title: 'Stairway to Heaven',
        artists: ['Led Zeppelin'],
        album: 'Led Zeppelin IV',
      },
      {
        title: 'Bohemian Like You',
        artists: ['The Dandy Warhols'],
        album: 'Thirteen Tales from Urban Bohemia',
      },
      {
        title: 'Imagine Dragons',
        artists: ['Radioactive'],
        album: 'Night Visions',
      },
      {
        title: 'Smells Like Teen Spirit',
        artists: ['Nirvana'],
        album: 'Nevermind',
      },
      {
        title: 'Sweet Child O\' Mine',
        artists: ['Guns N\' Roses'],
        album: 'Appetite for Destruction',
      }
    ];

    db.songs.insertMany(songs);
   ```
5. Populate collection `artists` by running this query:
   ```
   const artists = [
      {
        name: 'Queen',
        dateOfBirth: new Date('1946-09-05'),
        genres: ['Rock'],
      },
      {
        name: 'Eagles',
        dateOfBirth: new Date('1971-02-18'),
        genres: ['Rock'],
      },
      {
        name: 'John Lennon',
        dateOfBirth: new Date('1940-10-09'),
        genres: ['Rock', 'Pop'],
      },
      {
        name: 'Michael Jackson',
        dateOfBirth: new Date('1958-08-29'),
        genres: ['Pop', 'R&B'],
      },
      {
        name: 'The Beatles',
        dateOfBirth: new Date('1940-10-09'),
        genres: ['Rock', 'Pop'],
      },
      {
        name: 'Led Zeppelin',
        dateOfBirth: new Date('1944-08-20'),
        genres: ['Rock'],
      },
      {
        name: 'The Dandy Warhols',
        dateOfBirth: new Date('1994-01-01'),
        genres: ['Alternative Rock'],
      },
      {
        name: 'Imagine Dragons',
        dateOfBirth: new Date('2008-01-01'),
        genres: ['Pop Rock', 'Indie Rock'],
      },
      {
        name: 'Nirvana',
        dateOfBirth: new Date('1987-01-01'),
        genres: ['Grunge', 'Alternative Rock'],
      },
      {
        name: 'Guns N\' Roses',
        dateOfBirth: new Date('1985-03-26'),
        genres: ['Hard Rock'],
      },
    ];

    db.artists.insertMany(artists);
    ```
6. Populate collection `popular_songs` by running this query:
    ```
    const popularSongsData = [
      {
        title: 'Bohemian Rhapsody',
        playCount: 1000000,
        period: '2022',
      },
      {
        title: 'Hotel California',
        playCount: 800000,
        period: '2022',
      },
      {
        title: 'Imagine',
        playCount: 950000,
        period: '2022',
      },
      {
        title: 'Thriller',
        playCount: 1200000,
        period: '2022',
      },
      {
        title: 'Hey Jude',
        playCount: 700000,
        period: '2022',
      },
      {
        title: 'Stairway to Heaven',
        playCount: 600000,
        period: '2022',
      },
      {
        title: 'Bohemian Like You',
        playCount: 500000,
        period: '2022',
      },
      {
        title: 'Radioactive',
        playCount: 850000,
        period: '2022',
      },
      {
        title: 'Smells Like Teen Spirit',
        playCount: 900000,
        period: '2022',
      },
      {
        title: 'Sweet Child O\' Mine',
        playCount: 750000,
        period: '2022',
      },
    ];
    ```
