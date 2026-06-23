// import express from 'express';
// import helmet from 'helmet';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import passport from 'passport';
// import morgan from 'morgan';
// import routes from './routes';
// import { notFoundHandler } from './middlewares/not-found';
// import { errorHandler } from './middlewares/error-handler';
// import { rateLimiter } from './middlewares/rate-limit';
// import { requestLogger } from './middlewares/request-logger';
// import { corsOptions, bodyParserLimits } from './configs/http.config';
// import './configs/env.config';
// import './lib/db';
// import './middlewares/auth'; // registers passport strategy

// const app = express();

// app.set('trust proxy', 1);
// app.use(helmet());
// app.use(cors(corsOptions));
// app.use(express.json(bodyParserLimits));
// app.use(express.urlencoded({ extended: true, ...bodyParserLimits }));
// app.use(cookieParser());
// app.use(rateLimiter);
// app.use(requestLogger);
// app.use(passport.initialize());
// app.use(morgan('combined'));

// app.use('/api', routes);

// app.use(notFoundHandler);
// app.use(errorHandler);

// export default app;