CREATE TABLE User (
    user_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20)
);

CREATE TABLE Admin (
    admin_id INT PRIMARY KEY,
    user_id INT UNIQUE,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Reporter (
    reporter_id INT PRIMARY KEY,
    user_id INT UNIQUE,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Notification (
    notification_id INT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Location (
    location_id INT PRIMARY KEY,
    city VARCHAR(100),
    area VARCHAR(100),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);

CREATE TABLE PetProfile (
    pet_id INT PRIMARY KEY,
    species VARCHAR(50) NOT NULL,
    breed VARCHAR(100),
    age INT,
    gender ENUM('MALE','FEMALE','UNKNOWN'),
    color VARCHAR(50),
    distinguishing_marks TEXT
);

CREATE TABLE PetPhoto (
    photo_id INT PRIMARY KEY,
    pet_id INT,
    photo_url VARCHAR(255),
    is_primary BOOLEAN DEFAULT FALSE,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pet_id) REFERENCES PetProfile(pet_id)
);

CREATE TABLE CaseTable (
    case_id INT PRIMARY KEY,
    reporter_id INT,
    admin_id INT NULL,
    location_id INT,
    pet_id INT,
    case_type ENUM('LOST','FOUND') NOT NULL,
    report_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    status ENUM('REPORTED','UNDER_REVIEW','MATCH_FOUND','RECOVERED','CLOSED') DEFAULT 'REPORTED',
    FOREIGN KEY (reporter_id) REFERENCES Reporter(reporter_id),
    FOREIGN KEY (admin_id) REFERENCES Admin(admin_id),
    FOREIGN KEY (location_id) REFERENCES Location(location_id),
    FOREIGN KEY (pet_id) REFERENCES PetProfile(pet_id)
);

CREATE TABLE CasePhoto (
    photo_id INT PRIMARY KEY,
    case_id INT,
    photo_url VARCHAR(255),
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (case_id) REFERENCES CaseTable(case_id)
);

CREATE TABLE LostReport (
    lost_report_id INT PRIMARY KEY,
    case_id INT UNIQUE,
    date_time DATETIME,
    reward DECIMAL(10,2),
    FOREIGN KEY (case_id) REFERENCES CaseTable(case_id)
);

CREATE TABLE FoundReport (
    found_report_id INT PRIMARY KEY,
    case_id INT UNIQUE,
    date_time DATETIME,
    condition VARCHAR(100),
    FOREIGN KEY (case_id) REFERENCES CaseTable(case_id)
);

CREATE TABLE Matches (
    match_id INT PRIMARY KEY,
    lost_report_id INT,
    found_report_id INT,
    match_score FLOAT,
    match_status ENUM('PENDING','CONFIRMED','REJECTED') DEFAULT 'PENDING',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lost_report_id) REFERENCES LostReport(lost_report_id),
    FOREIGN KEY (found_report_id) REFERENCES FoundReport(found_report_id)
);

-- PERFORMANCE INDEXES
CREATE INDEX idx_pet_species ON PetProfile(species);
CREATE INDEX idx_pet_breed ON PetProfile(breed);
CREATE INDEX idx_case_location ON CaseTable(location_id);
CREATE INDEX idx_case_status ON CaseTable(status);