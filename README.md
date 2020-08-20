# API Description

## Connections

 ``/connections``  
GET - List total of connections   
Response body example:
```json
{
  "total": 10
}
```

POST - Create new connection  
Request body example:
```json
{
  "user_id": 1
}
```
## Classes

`/classes`  
GET - List all classes  

### Filters
``subject`` , ``week_day`` and ``time``  

Week day format: number, from ``0`` (sunday) to ``6`` (saturday)  
Time in basic string format MM:SS: e.g `8:00`

Example:

``/classes?week_day=1&subject=Matem%C3%A1tica&time=8%3A00``

Response body example:
```json
[
  {
    "id": 1,
    "subject": "Matemática",
    "cost": 80,
    "user_id": 1,
    "name": "Diego Fernandes",
    "avatar": "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    "whatsapp": "19982044798",
    "bio": "CTO at @Rocketseat. Passionate about education and changing people's lives through programming."
  }
]
```
POST - Create a new class  
Request body example:
```json
{
    "name": "Diego Fernandes",
    "avatar": "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    "whatsapp": "19982044798",
    "bio": "CTO at @Rocketseat. Passionate about education and changing people's lives through programming.",
    "subject": "Matemática",
    "cost": 80,
    "schedule": [
        {"week_day": 1, "from": "8:00", "to": "12:00"},
        {"week_day": 3, "from": "10:00", "to": "18:00"},
        {"week_day": 4, "from": "8:00", "to": "12:00"}
    ]
}
```
