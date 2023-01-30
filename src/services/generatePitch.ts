import axios from "axios";
export const generatePitch = async (
  productName: string,
  productDescription: string,
  tags?: string[]
) => {
  const options = {
    method: "POST",
    url: "https://api.cohere.ai/generate",
    headers: {
      accept: "application/json",
      "Cohere-Version": "2022-12-06",
      "content-type": "application/json",
      authorization: `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`,
    },
    data: {
      max_tokens: 500,
      return_likelihoods: "NONE",
      truncate: "END",
      num_generations: 1,
      temperature: 0.5,
      prompt: `Product Name: Lay's
Tags: potato chips, fast food
Description: In good times, there are things that are always there, like our Lay's: crunchy and irresistible potatoes thinly sliced and deliciously seasoned.
Pitch: Hi, my name is Jacob and I'm a representative from Lay's potato chips. So nice to be with all of you today. 
We've all been there, right? You come home from a long day at the office, wanting nothing more than to plop down in front of the TV with a good salty snack. You open your pantry and let out an exasperated sigh: nothing but plain potato chips. Nothing interesting, nothing unique, nothing that makes your mouth water. 
It's an all-too-familiar conundrum, and one that we here at Lay's are determined to do something about. 
That's why we've recently begun a campaign that asks you, the consumer, to help us select a series of new potato chip flavors. We'll engage with you across a range of platforms, crowdsourcing the insights necessary to keep all Lay's snackers satisfied. Before you know it, we'll all be living in a world full of flavor. 
If you've got any questions about this new initiative or about our brand in general, my line is always open. We're very much looking forward to seeing what we can build together.”  
Notice how the presenter of this sales pitch uses a narrative to capture his audience's attention. By placing the members of his audience in the shoes of someone dealing with a common problem — not having interesting enough snack foods at home — he is making his product relevant to the consumer. 
By soliciting his consumer's input, he is guaranteeing that they'll be satisfied with the results of the campaign. 
Lastly, we can appreciate how the salesperson's playfulness with his language surrounding the product has the effect of putting his audience at ease, thus making them open to hearing new ideas.
--
Product Name: ${productName}
Tags: ${tags?.join(", ")}
Description: ${productDescription}
Pitch:`,
    },
  };

  const response = await axios.request(options);
  return response.data.generations[0].text.split("--")[0];
};
