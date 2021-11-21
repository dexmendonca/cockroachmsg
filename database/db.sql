CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE jobgroup (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    cronperiod VARCHAR NOT NULL
);

CREATE TABLE status_job (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE job (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR UNIQUE NOT NULL,
    label VARCHAR NOT NULL,
    description TEXT,
    fn VARCHAR NOT NULL,
    status_job_id BIGINT REFERENCES status_job(id),
    jobgroup_id BIGINT REFERENCES jobgroup(id)
);
CREATE INDEX ON job (fn);
CREATE INDEX ON job (name);
CREATE INDEX ON job (status_job_id);
CREATE INDEX ON job (jobgroup_id);


CREATE TABLE status_task (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE task (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    params JSON,
    status_task_id BIGINT REFERENCES status_task(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    processed_at TIMESTAMPTZ
);
CREATE INDEX ON task (status_task_id);