/**
 * Creator: TebakAja Engineering Team
 * 
 * Note:
 * Open the Hugging Face website, copy the script provided,
 * and access your browser's Developer Console by pressing F12 or Ctrl+Shift+I.
 * Paste the script and press Enter to execute.
 */

 class HuggingFaceSpaceDeleteInterface {
  async deleteSpace(_repository) {
    throw new Error('Method not implemented')
  }
}


class HuggingFaceSpaceDelete extends HuggingFaceSpaceDeleteInterface {
  constructor() {
    super()
    this.endpoint = 'https://huggingface.co/api/repos/delete'
    this.headers = {
      "accept": "*/*",
      "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    }
  }

  async deleteSpace(_repository) {
    const response = await fetch(this.endpoint, {
      method: "DELETE",
      headers: this.headers,
      referrer: `https://huggingface.co/spaces/tebakaja/${_repository}/settings`,
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        organization: "tebakaja",
        name: _repository,
        type: "space"
      }),
      mode: "cors",
      credentials: "include"
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  }

  async deleteSpaces(repositories) {
    for (const repository of repositories) {
      try {
        const result = await this.deleteSpace(repository);
        console.log(`Repository deleted: ${repository}`, result)
      } catch (error) {
        console.error(`Error deleting repository ${repository}:`, error)
      }
    }
  }
}


const repositories = ["repo1", "repo2"]
const huggingFaceSpaceDelete = new HuggingFaceSpaceDelete()

huggingFaceSpaceDelete.deleteSpaces(repositories)
  .then(() => console.log('All repositories processed.'))
  .catch(error => console.error('Error processing repositories:', error))
