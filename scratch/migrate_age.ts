import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST || 'localhost',
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '',
  database: process.env.MYSQLDATABASE || 'pawconnect',
  port: parseInt(process.env.MYSQLPORT || '3306'),
});

async function migrate() {
  try {
    console.log("Altering PetProfile table...");
    await pool.query("ALTER TABLE PetProfile MODIFY COLUMN age VARCHAR(50)");
    console.log("Successfully altered PetProfile.age to VARCHAR(50)");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    await pool.end();
  }
}

migrate();
