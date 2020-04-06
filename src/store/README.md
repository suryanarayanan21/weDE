# Store organisation

## Store structure

store/
|
|-- projects[]/(each)
|-- |
|-- |-- collaborators[]/(each)
|-- |-- |
|-- |-- |-- userID
|-- |
|-- |-- code
|-- |-- chatRoomID
|
|-- users[]/(each)
|-- |
|-- |-- userID
|-- |-- name
|-- |-- isOnline
|
|-- chatRooms[]/(each)
|-- |
|-- |-- chatRoomID
|-- |-- messages[]/(each)
|-- |-- |
|-- |-- |-- text
|-- |-- |-- userID
|-- |-- |-- time (optional)
|-- |-- |-- snippet (optional)
|-- |
|-- |-- users[]/(each)
|-- |-- |
|-- |-- |-- userID
