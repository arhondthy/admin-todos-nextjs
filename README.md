# development
pasos para levantaqr la app en dev

1.  levantar base de datos

docker compose up -d

2. copiar .env y nombrarlo como .env.template
3. reemplazar variables de entorno
4. ejecutar comando `` npm install``
5. ejecutar comando `` npm run dev``
6. ejecutar comando prisma
``npx prisma migrate dev`` ``npx prisma generate``
7. ejecutar seed para crear la base local (localhost:3000/api/seed)

# prisma comands
npx prisma init
npx prisma migrate dev
npx prisma generate

# prod



# stage