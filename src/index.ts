import app from './app';
import { logger } from './utils/logger';
import { connectToDB } from './config/db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectToDB();

  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
};

startServer();