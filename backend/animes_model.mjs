import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successful connection to MongoDB through Mongoose");
});

const animeSchema = mongoose.Schema({
    title: { type: String, required: true },
    score: { type: Number, required: true },
    progress: { type: Number, required: true },
    type: { type: String, required: true },
});

const Anime = mongoose.model("Anime", animeSchema);

const createAnime = async (title, score, progress, type) => {
    const anime = new Anime({ title: title, score: score, progress: progress, type: type });
    return anime.save();
}

const findAnimeById = async (_id) => {
    const query = Anime.findById(_id)
    return query.exec();
}

const findAnimes = async (filter) => {
    const query = Anime.find(filter);
    return query.exec();
}

const replaceAnime = async (_id, title, score, progress, type) => {
    const result = await Anime.replaceOne({ _id: _id }, { title: title, score: score, progress: progress, type: type });
    return result.modifiedCount;
}

const deleteById = async (_id) => {
    const result = await Anime.deleteOne({ _id: _id });
    return result.deletedCount;
}