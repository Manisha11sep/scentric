UPDATE users SET name = $2, email = $3, picture_url = $4, address = $5 WHERE id = $1 RETURNING *;
