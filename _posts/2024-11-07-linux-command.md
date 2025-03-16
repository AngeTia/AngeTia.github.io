---
layout: post
title: Commandes Linux
date: 07-11-2024
categories: [System]
tag: [Linux]
---

# Commandes Linux : Débutant, Intermédiaire et Avancé

![Command Linux](https://d196b17bf6afdead8bed8031975b2e611fae5c5a-m.proxy2.startpage.com/npd/bsuymbosvpk/SR/mwqctwNNC2coRSy2luBxM5AD1A//////////wp-content/uploads/2013/12/Linux_command-line._Bash._GNOME_Terminal._screenshot.png)

Linux offre un large éventail de commandes pour gérer et administrer le système. Voici un guide des commandes essentielles, classées par niveau de difficulté.


## Niveau Débutant

Les commandes suivantes permettent de naviguer dans le système de fichiers et d'effectuer des opérations de base.

- **`pwd`** : Affiche le répertoire de travail actuel.
- **`ls`** : Liste les fichiers et dossiers du répertoire courant.
  - Ex. : `ls -l` (affiche des informations détaillées sur les fichiers).
- **`cd`** : Change de répertoire.
  - Ex. : `cd /home/user` (va au répertoire /home/user).
- **`cp`** : Copie des fichiers ou des répertoires.
  - Ex. : `cp source.txt destination.txt`.
- **`mv`** : Déplace ou renomme un fichier.
  - Ex. : `mv ancien_nom.txt nouveau_nom.txt`.
- **`rm`** : Supprime des fichiers.
  - Ex. : `rm fichier.txt`.
- **`mkdir`** : Crée un nouveau répertoire.
  - Ex. : `mkdir nouveau_dossier`.
- **`touch`** : Crée un fichier vide.
  - Ex. : `touch fichier.txt`.
- **`cat`** : Affiche le contenu d'un fichier.
  - Ex. : `cat fichier.txt`.


## Niveau Intermédiaire

Ces commandes permettent de gérer les processus, d'analyser l'utilisation des ressources, et de manipuler le contenu des fichiers.

- **`ps`** : Affiche les processus en cours d’exécution.
- **`top`** : Montre l'utilisation des ressources système en temps réel.
- **`grep`** : Recherche un motif dans un fichier.
  - Ex. : `grep "motif" fichier.txt`.
- **`find`** : Recherche des fichiers dans un répertoire.
  - Ex. : `find / -name fichier.txt`.
- **`chmod`** : Change les permissions des fichiers.
  - Ex. : `chmod 755 script.sh`.
- **`chown`** : Change le propriétaire d’un fichier ou répertoire.
  - Ex. : `chown user:user fichier.txt`.
- **`tar`** : Compresse ou extrait des archives.
  - Ex. : `tar -czvf archive.tar.gz dossier/`.
- **`df`** : Affiche l’espace disque disponible.
- **`du`** : Affiche la taille d’un répertoire ou fichier.
  - Ex. : `du -h dossier/`.
- **`kill`** : Termine un processus.
  - Ex. : `kill 1234` (où 1234 est le PID du processus).


## Niveau Avancé

Les commandes avancées sont souvent utilisées pour automatiser des tâches, effectuer des opérations de réseau, ou manipuler des flux de données.

- **`cron`** : Planifie l'exécution de tâches automatisées.
  - Ex. : `crontab -e` pour éditer les tâches planifiées.
- **`awk`** : Manipule et analyse des fichiers texte.
  - Ex. : `awk '{print $1}' fichier.txt` (affiche la première colonne).
- **`sed`** : Modifie des fichiers en ligne de commande.
  - Ex. : `sed 's/ancien/nouveau/g' fichier.txt`.
- **`iptables`** : Configure les règles de pare-feu.
  - Ex. : `iptables -A INPUT -p tcp --dport 80 -j ACCEPT`.
- **`ssh`** : Permet de se connecter à une machine distante via le protocole SSH.
  - Ex. : `ssh user@adresse_ip`.
- **`rsync`** : Synchronise des fichiers et dossiers entre deux emplacements.
  - Ex. : `rsync -av source/ destination/`.
- **`curl`** : Effectue des requêtes vers des URL.
  - Ex. : `curl http://exemple.com`.
- **`netstat`** : Affiche les connexions réseau et les ports ouverts.
- **`iptables`** : Configure les règles de pare-feu pour la sécurité réseau.
- **`xargs`** : Utilisé pour construire et exécuter des commandes à partir des données en entrée.
  - Ex. : `ls | xargs rm` (supprime tous les fichiers listés par `ls`).

---

En maîtrisant ces commandes, vous deviendrez plus à l’aise dans l’environnement Linux et pourrez effectuer des tâches de plus en plus complexes de manière efficace. Bonne pratique !
