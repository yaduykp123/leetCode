# Write your MySQL query statement below
SELECT 
    pe.firstName,
    pe.lastName,
    addre.city,
    addre.state
FROM Person pe
LEFT JOIN Address addre
ON pe.personId = addre.personId;