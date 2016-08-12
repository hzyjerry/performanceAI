var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });


/*


DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS annotations;
DROP TABLE IF EXISTS builds;
DROP TABLE IF EXISTS user_teams;
DROP TABLE IF EXISTS user_builds;
DROP TABLE IF EXISTS build_annotations;
DROP TABLE IF EXISTS behaviour;
DROP TABLE IF EXISTS suggestions;

CREATE TABLE IF NOT EXISTS users (
	username CHAR(20) PRIMARY KEY, -- username can be made longer later
    name CHAR(64),
    password CHAR(20),
	create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	team INT references team(team_id),
);

 CREATE TABLE IF NOT EXISTS teams (
    team_id INT AUTO_INCREMENT PRIMARY KEY,
    name CHAR(64),
    is_admin BOOLEAN,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );

 CREATE TABLE IF NOT EXISTS annotations (
    annotate_id INT AUTO_INCREMENT PRIMARY KEY,
	name CHAR(20),
	sent_by char(20) references users(username),
	written_by char(20) references users(username),
    request TEXT,
    response TEXT,
	create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );

 CREATE TABLE IF NOT EXISTS user_teams (
	username CHAR(20) REFERENCES users,
	achiev_id INT REFERENCES achievements,
	time_acquired TIMESTAMP,
	PRIMARY KEY (username, achiev_id)
 );

 CREATE TABLE IF NOT EXISTS user_builds (
	user_1 CHAR(20) REFERENCES users,
	user_2 CHAR(20) REFERENCES users,
	PRIMARY KEY (user_1, user_2)
 );

CREATE TABLE IF NOT EXISTS build_annotations (
	username CHAR(20) REFERENCES users,
	quiz_id INT REFERENCES quiz,
	score INT,
	is_graded BOOLEAN,
	time_completed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	duration TIME,
	PRIMARY KEY (username, quiz_id, time_completed)
);

INSERT INTO users (username, name, password, is_admin)
    VALUES ('admin', 'Administrator', 'admin', True);


*/