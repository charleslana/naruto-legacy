const characters = [
    {
        name: 'Akimichi',
        image: 1,
        value: 1
    },
    {
        name: 'Asuma',
        image: 1,
        value: 2
    },
    {
        name: 'Boruto',
        image: 1,
        value: 3
    },
    {
        name: 'Chiyo',
        image: 1,
        value: 4
    },
    {
        name: 'Choji',
        image: 1,
        value: 5
    },
    {
        name: 'Danzou',
        image: 1,
        value: 6
    },
    {
        name: 'Darui',
        image: 1,
        value: 7
    },
    {
        name: 'Deidara',
        image: 1,
        value: 8
    },
    {
        name: 'Gaara',
        image: 1,
        value: 9
    },
    {
        name: 'Guy',
        image: 1,
        value: 10
    },
    {
        name: 'Haku',
        image: 1,
        value: 11
    },
    {
        name: 'Hashirama',
        image: 1,
        value: 12
    },
    {
        name: 'Hiashi Hyūga',
        image: 1,
        value: 13
    },
    {
        name: 'Hiddan',
        image: 1,
        value: 14
    },
    {
        name: 'Hinata',
        image: 1,
        value: 15
    },
    {
        name: 'Houki Taketori',
        image: 1,
        value: 16
    },
    {
        name: 'Ino',
        image: 1,
        value: 17
    },
    {
        name: 'Iruka',
        image: 1,
        value: 18
    },
    {
        name: 'Itachi',
        image: 1,
        value: 19
    },
    {
        name: 'Jiraiya',
        image: 1,
        value: 20
    },
    {
        name: 'Jiroubou',
        image: 1,
        value: 21
    },
    {
        name: 'Juugo',
        image: 1,
        value: 22
    },
    {
        name: 'Kabuto',
        image: 1,
        value: 23
    },
    {
        name: 'Kaguya',
        image: 1,
        value: 24
    },
    {
        name: 'Kakashi',
        image: 1,
        value: 25
    },
    {
        name: 'Kakuzu',
        image: 1,
        value: 26
    },
    {
        name: 'Kankuro',
        image: 1,
        value: 27
    },
    {
        name: 'Karin',
        image: 1,
        value: 28
    },
    {
        name: 'Karui',
        image: 1,
        value: 29
    },
    {
        name: 'Kawaki',
        image: 1,
        value: 30
    },
    {
        name: 'Kiba',
        image: 1,
        value: 31
    },
    {
        name: 'Killer Bee',
        image: 1,
        value: 32
    },
    {
        name: 'Kimimaro',
        image: 1,
        value: 33
    },
    {
        name: 'Kin tsuchi',
        image: 1,
        value: 34
    },
    {
        name: 'Kisame',
        image: 1,
        value: 35
    },
    {
        name: 'Konahamaru',
        image: 1,
        value: 36
    },
    {
        name: 'Konan',
        image: 1,
        value: 37
    },
    {
        name: 'Kurenai',
        image: 1,
        value: 38
    },
    {
        name: 'Madara',
        image: 1,
        value: 39
    },
    {
        name: 'Mei Terumi',
        image: 1,
        value: 40
    },
    {
        name: 'Metal Lee',
        image: 1,
        value: 41
    },
    {
        name: 'Minato',
        image: 1,
        value: 42
    },
    {
        name: 'Mitsuki',
        image: 1,
        value: 43
    },
    {
        name: 'Moegi',
        image: 1,
        value: 44
    },
    {
        name: 'Nagato',
        image: 1,
        value: 45
    },
    {
        name: 'Naruto',
        image: 1,
        value: 46
    },
    {
        name: 'Neji',
        image: 1,
        value: 47
    },
    {
        name: 'Nidaime',
        image: 1,
        value: 48
    },
    {
        name: 'Omoi',
        image: 1,
        value: 49
    },
    {
        name: 'Omoshiki',
        image: 1,
        value: 50
    },
    {
        name: 'Onoki',
        image: 1,
        value: 51
    },
    {
        name: 'Orochimaru',
        image: 1,
        value: 52
    },
    {
        name: 'Pain',
        image: 1,
        value: 53
    },
    {
        name: 'Rikudou',
        image: 1,
        value: 54
    },
    {
        name: 'Rock Lee',
        image: 1,
        value: 55
    },
    {
        name: 'Sai',
        image: 1,
        value: 56
    },
    {
        name: 'Sakura',
        image: 1,
        value: 57
    },
    {
        name: 'Sarada',
        image: 1,
        value: 58
    },
    {
        name: 'Sarutobi',
        image: 1,
        value: 59
    },
    {
        name: 'Sasori',
        image: 1,
        value: 60
    },
    {
        name: 'Sasuke',
        image: 1,
        value: 61
    },
    {
        name: 'Shikadai',
        image: 1,
        value: 62
    },
    {
        name: 'Shikamaru',
        image: 1,
        value: 63
    },
    {
        name: 'Shinki',
        image: 1,
        value: 64
    },
    {
        name: 'Shino',
        image: 1,
        value: 65
    },
    {
        name: 'Shin Uchiha',
        image: 1,
        value: 66
    },
    {
        name: 'Suigetsu',
        image: 1,
        value: 67
    },
    {
        name: 'Tayuya',
        image: 1,
        value: 68
    },
    {
        name: 'Temari',
        image: 1,
        value: 69
    },
    {
        name: 'Tenten',
        image: 1,
        value: 70
    },
    {
        name: 'Tobi',
        image: 1,
        value: 71
    },
    {
        name: 'Tsuchikage',
        image: 1,
        value: 72
    },
    {
        name: 'Tsunade',
        image: 1,
        value: 73
    },
    {
        name: 'Wimawari',
        image: 1,
        value: 74
    },
    {
        name: 'Yamato',
        image: 1,
        value: 75
    },
    {
        name: 'Yondaime Raikage',
        image: 1,
        value: 76
    },
    {
        name: 'Zabuza',
        image: 1,
        value: 77
    },
    {
        name: 'Zetsu',
        image: 1,
        value: 78
    }
];

export default characters;