import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("timeline");

    const timelineItems = await db
      .collection("timelineItems")
      .find({})
      .sort({ year: -1 })
      .toArray();
    // console.log("timelineItems", timelineItems);
    res.json(timelineItems);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Unable to fetch timeline items" });
  }
}
