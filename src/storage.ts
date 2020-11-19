/** @format */

export class Storage {
	private name = "hoafight";

    public static getLocalStorage() {
        if (localStorage.getItem(this.name)) {
            return JSON.parse(localStorage.getItem(this.name));
        } else {
            return null;
        }
	}
	
	public static initLocalStorage(pContent) {
		if (!localStorage.getItem(this.name)) {
			try {
				localStorage.setItem(this.name, JSON.stringify(pContent));
				return true;
			} catch {
				return false;
			}
		} else {
			return null;
		}
	}

}
