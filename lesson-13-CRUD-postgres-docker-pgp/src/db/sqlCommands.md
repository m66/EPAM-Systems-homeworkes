--CREATE TABLE users(
--	user_id UUID NOT NULL PRIMARY KEY,
--	name VARCHAR(50) NOT NULL,
--	age INTEGER NOT NULL,
--	gender VARCHAR(50) NOT NULL,
--	status BOOLEAN NOT NULL,
--	creationTimestamp VARCHAR(50) NOT NULL,
--	modificationTimestamp VARCHAR(50)
--)

--INSERT INTO users(user_id, name, age, gender, status, creationTimestamp) 
--VALUES (uuid_generate_v4(), 'aaaa', 32, 'male', false, '2023-07-12T15:45:37.008Z'),
--	   (uuid_generate_v4(), 'bbbb', 22, 'female', false, '2023-07-12T15:45:37.008Z'),
--	   (uuid_generate_v4(), 'cccc', 55, 'male', false, '2023-07-12T15:45:37.008Z')