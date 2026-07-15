const endpoint = "https://api.github.com/graphql";

const query = `
query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        totalContributions

        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            date
          }
        }
      }
    }
  }
}
`;

export async function getContributionCalendar() {
  const response = await fetch(endpoint, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${process.env.GITHUB_GRAPHQL_TOKEN}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query,
      variables: {
        username: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
      },
    }),

    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("GitHub GraphQL API Error");
  }

  return response.json();
}

// export async function getContributionCalendar() {
//   const response = await fetch("https://api.github.com/graphql", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${process.env.GITHUB_GRAPHQL_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables: {
//         username: process.env.,
//       },
//     }),
//     next: {
//       revalidate: 3600,
//     },
//   });

//   const data = await response.json();

//   console.log("GitHub GraphQL Response:", JSON.stringify(data, null, 2));

//   return data;
// }