# Schema Information

## properties
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
address     | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
description | string    | not null
area        | integer   | not null
price       | integer   | not null
num_rooms   | integer   | not null
num_bathroom| integer   | not null
borough_id  | integer   | not null, foreign key (references borough), indexed
availability| boolean   | not null, default: false

## images
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
property_id     | integer   | not null, foreign key (references property)

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

## borough
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
