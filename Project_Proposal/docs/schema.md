# Schema Information

## properties
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
address     | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
price       | integer   | not null
num_rooms   | integer   | not null
borough     | string    | not null
availability| boolean   | not null, default: false

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## bookmarks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
property_id | integer   | not null, foreign key (references property)
user_id     | integer   | not null, foreign key (references user)
