/**
 * Creator: TebakAja Engineering Team
 * 
 * Note:
 * Open the Hugging Face website, copy the script provided,
 * and access your browser's Developer Console by pressing F12 or Ctrl+Shift+I.
 * Paste the script and press Enter to execute.
 */

class HuggingFaceSpaceCreateInterface {
  async createSpace(_repository) {
    throw new Error('Method not implemented');
  }
}


class HuggingFaceSpaceCreate extends HuggingFaceSpaceCreateInterface {
  constructor() {
    super();
    this.endpoint = 'https://huggingface.co/api/repos/create';
    this.headers = {
      "Accept": "application/json",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "Content-Type": "application/json",
      "Priority": "u=1, i",
      "Sec-CH-UA": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
      "Sec-CH-UA-Mobile": "?0",
      "Sec-CH-UA-Platform": "\"Windows\"",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin"
    };
  }

  async createSpace(_repository) {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: this.headers,
      referrer: 'https://huggingface.co/new-space?sdk=docker',
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        sdk: "docker",
        hardware: "cpu-basic",
        storageTier: null,
        sleepTimeSeconds: 172800,
        secrets: [],
        variables: [],
        name: _repository,
        type: "space",
        license: "other",
        private: false,
        devModeEnabled: false
      }),
      mode: "cors",
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json(); 
  }

  async createSpaces(repositories) {
    for (const repository of repositories) {
      try {
        const result = await this.createSpace(repository);
        console.log(`Repository created: ${repository}`, result);
      } catch (error) {
        console.error(`Error creating repository ${repository}:`, error);
      }
    }
  }
}


const repositories = ["repo1", "repo2"];
const huggingFaceSpaceCreate = new HuggingFaceSpaceCreate();

huggingFaceSpaceCreate.createSpaces(repositories)
  .then(() => console.log('All repositories processed.'))
  .catch(error => console.error('Error processing repositories:', error));
