# My work

I tried as much as possible to respect NestJs' way of doing things, following documentation, using guards, modules, services, providers...

I really liked the exercice, it allowed me to discover NestJs and see further functionnalitites of Express and Node. It was also the first time I implemented a Jwt authentification, which was pretty tricky but thrilling 🙂
I had a lot of problems with Passport jwt implementation though...

HTML is generated using EJS + SASS.
Used Bootstrap, Sequelize ORM, Passport (for authentification and guards), cookie-parser to stock jwt token.

Unfortunately, I have not had time to create tests.

## Organisation
```
.
└── /
    ├── /games/
    ├── /login
    ├── /calls (jwt 🔒)
    └── /profile (jwt 🔒)
```

## Use
- from `/`, type a game name to find its price
- if you want to see logs of searched games, first log at `/login` with admin/admin or root/root, then you can access `/calls` (and `/profile`)

## Test JWT connection with curl

> Windows
```powershell
> curl --header "Content-Type:application/json" localhost:3000/auth/login --request POST --data "{\"username\":\"root\", \"password\":\"root\"}"
```
> Linux
```bash
> curl --header "Content-Type:application/json" localhost:3000/auth/login --request POST --data '{"username":"root", "password":"root"}'
```

```
> curl -I localhost:3000/calls -H "Authorization:Bearer [jwt_token]"
```