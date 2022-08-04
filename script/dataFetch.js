
  export async function  getUserData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      };
