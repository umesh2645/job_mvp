CREATE ROLE myuser WITH LOGIN PASSWORD 'mypassword';
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO myuser;