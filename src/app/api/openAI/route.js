import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';
dotenv.config({ path: './env.local' });

export async function POST(request) {
  const data = await request.json();
  let content =
    'I have this lists of tasks to complete starting from highest priority. Based on your judgement, allocate accurate timings to them between 9am to 6pm and return it in a list of objects for me where each object has the 3 fields of these exact names: name, start_time, end_time. Do not type anything else other than json code. No additional words at all. Remember to factor in an hour of lunch time. Here is the list: ';
  data.forEach((task) => {
    content += task.value + '. ';
  });
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_SECRET_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: content }],
  });
  const msg = completion.data.choices[0].message;
  return new Response(msg.content);
}
